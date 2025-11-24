function Validar(formDataPar) {
    let formDataObject = {};

    for (let [key, value] of formDataPar.entries()) {
        formDataObject[key] = value;
    }

    const errors = validate(formDataObject, constraints, { format: "detailed" });

    if (errors) {
        const errorMessages = Object.values(errors).flat();
        alert("O campo " + errorMessages[0].attribute + " " + errorMessages[0].options.message);
        const idFocus = "#" + errorMessages[0].attribute;
        $(idFocus).focus();
        return false;
    }

    return true;
}
