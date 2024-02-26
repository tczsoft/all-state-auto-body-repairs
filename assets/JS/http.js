async function create(url,formData) {
    return await fetch(url, {
        method: "POST",
        body: formData,
    }).then(data => data.json())
}
  
export {create}