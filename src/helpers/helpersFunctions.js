import formFields from '../data/formFieldsData';

export const convertArrToObj = (arr) => Object.assign({}, ...arr);

export const createStateData = () => {    
    return formFields.map((field) => {
        const { name } = field;
        return {
            [name]: {
                value: '',
                isValid: false,
                isFill: false,
            },
        };
    });
};

export const createInitStateObj = () => convertArrToObj(createStateData());

export const getInputsNames = (fields) => fields.map((field) => field.name);

export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

const getCurrentDate = () => {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    return new Date(Date.now() - timezoneOffset).toISOString().slice(0, 10);
};

export const setDateRange = (type) => (type === 'date' ? getCurrentDate() : null);

export const countTime = (date, time) => {
    const [year, month, day] = date.split('-');
    return new Date(`${month}/${day}/${year} ${time}:00`).getTime();
};

export const countHoursDifference = (time1, time2) => (time2 - time1) / (60 * 60 * 1000);

const setItemData = (labelContent, valueContent) => ({
    label: labelContent,
    value: valueContent,
});

const prepareDateInfoToShow = (date, time, type) => {
    const formattedDate = date.split('-').reverse().join('.');
    return setItemData(`${type}`, `${formattedDate}, ${time}`);
};