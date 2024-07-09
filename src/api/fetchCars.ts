async function fetchCars() {
  const url = "https://test.tspb.su/test-task/vehicles";
  try {
    const response = await fetch(url, {
      method: "GET"
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json
  } catch (error: any) {
    console.error(error.message);
  }
}

export default fetchCars;