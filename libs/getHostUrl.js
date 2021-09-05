const getHostUrl = url => {
    let parsedUrl = new URL(url);
    return parsedUrl.origin;
}

export { getHostUrl } 