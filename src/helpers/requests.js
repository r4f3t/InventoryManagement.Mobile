export async function getBarcode(barcodeNo) {
  try {
    let response = await fetch(
      `https://5cab8e57c85e05001452ea65.mockapi.io/rapi/barcodes/${barcodeNo}`
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
