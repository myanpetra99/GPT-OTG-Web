// fetch get latest release github from myanpetra99/gpt-otg

export async function getLatestRelease() {
    fetch('https://github.com/myanpetra99/gpt-otg/releases/latest')
  .then(response => response.url)
  .then(url => {
    const version = url.split('/').pop();
    console.log(version);
  })
  .catch(error => console.error('Error:', error));
}
