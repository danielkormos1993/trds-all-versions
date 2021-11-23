const copyAttributes = ($copyFrom, attributesArray, $copyTo) => {
    [...$copyFrom.attributes].forEach(attribute => {
        if(attributesArray.includes(attribute.name))
            $copyTo.setAttribute(attribute.name, attribute.value);
    })
}

export { copyAttributes }