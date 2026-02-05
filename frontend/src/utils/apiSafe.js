export async function apiSafe(fn) {
  try {
    return await fn();
  } catch (err) {
    alert(
      err.response?.data?.error ||
      "Request failed"
    );
    throw err;
  }
}