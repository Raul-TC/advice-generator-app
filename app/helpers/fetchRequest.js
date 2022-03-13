export async function fetchRequest(props) {
  let { url, cbSuccess } = props;
  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      console.info(err);
      let message = err.statusText || "Occurió un error al acceder a la API";
      document.querySelector(".containerInfo").innerHTML = `<div class="error">
      <blockquote>Error ${err.status} : ${message} </blockquote>
      </div>`;
    });
}
