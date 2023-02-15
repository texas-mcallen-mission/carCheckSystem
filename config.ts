
const config:configOptions = {
    disableMarkingPulled: false,
    enable_cacheLock: true,
    softCutoffInMinutes: 25,
    debug_mode: false,
    response_form_url: "",
    areaNameQuestion: "Area Name",
    // photoArchive_FolderID: ""
};

interface configOptions {
    disableMarkingPulled:boolean
    enable_cacheLock:boolean
    softCutoffInMinutes:number
    debug_mode:boolean
    response_form_url:string
    areaNameQuestion:string
}

const contactConfig: sheetDataEntry = {
    tabName: "Contact Data",
    headerRow: 0,
    includeSoftcodedColumns: true,
    initialColumnOrder: {
        dateContactGenerated: 0,
        areaEmail: 1,
        areaName: 2,
        name1: 3,
        position1: 4,
        isTrainer1: 5,
        name2: 6,
        position2: 7,
        isTrainer2: 8,
        name3: 9,
        position3: 10,
        isTrainer3: 11,
        district: 12,
        zone: 13,
        unitString: 14,
        hasMultipleUnits: 15,
        languageString: 16,
        isSeniorCouple: 17,
        isSisterArea: 18,
        hasVehicle: 19,
        vehicleMiles: 20,
        vinLast8: 21,
        aptAddress: 22,
    }
};

// make sure to update the interface in types as well!
const responseConfig: sheetDataEntry = {
    tabName: "Responses",
    headerRow: 0,
    includeSoftcodedColumns: true,
    initialColumnOrder: {
        timestamp: 0,
        email: 1,
        pulled:2,
        month: 3,
        year: 4,
        area_name:5
    }
};

const sheetCoreConfig: sheetCoreConfigInfo = {
    cacheKey: "SHEETCORE_LOGBOOKS",
    cacheExpiration: 1800,
    cacheEnabled: false,


};

