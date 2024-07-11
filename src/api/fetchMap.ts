async function fetchMap(req: string) {
  const url = `
  https://static-maps.yandex.ru/v1?ll=${req}&size=275,275&z=13&pt=${req}&apikey=f75d32b0-c8e6-4c6f-8afc-88bc8c165c5a`;
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "no-cors",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const imageBlob = await response.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    return imageObjectUrl;
  } catch (error: any) {
    console.error(error.message);
  }
}

export default fetchMap;