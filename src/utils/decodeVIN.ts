require('dotenv').config();
const axios = require('axios')

export async function decodeVIN(vin: string) {
    const apiUrl = process.env.VIN_DECODE_API_URL;

    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/${vin}?format=json`)
            .then((res: any) => {
                const data = res.data;
                let result = {
                    make: null,
                    model: null,
                    year: null
                };
                if (data && data.Results && data.Results.length > 0) {
                    data.Results.forEach((_data: any) => {
                        if (_data?.Variable === 'Make') {
                            result.make = _data.Value;
                        }
                        if (_data?.Variable === 'Model') {
                            result.model = _data.Value;
                        }
                        if (_data?.Variable === 'Model Year') {
                            result.year = _data.Value;
                        }
                    })
                }
                resolve(result);
            })
            .catch((err: any) => reject(err))
    })
};
