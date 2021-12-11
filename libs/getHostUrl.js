const getHostUrl = url => {
    let parsedUrl = new URL(url);
    console.log(parsedUrl);
    return parsedUrl.origin;
}

export { getHostUrl } 