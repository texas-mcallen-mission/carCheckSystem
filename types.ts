interface carCheckEntry extends kiDataEntry {
    timestamp: string,
    email: string,
    pulled: boolean,
    month: string,
    year: string | number,
    area_name:string
}

function convertKiEntryToCarCheckEntry_(data: kiDataEntry) {
    let output: carCheckEntry = {
        timestamp: '',
        email: '',
        pulled: false,
        month: '',
        year: '',
        area_name: '',
    }
    output = { ...output, ...data }
    return output
}