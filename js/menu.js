
const $detailList = document.querySelectorAll('details')
$detailList.forEach(($details) => {
  $details.querySelector('summary').addEventListener('click', desplegar)
})

function desplegar() {
  $detailList.forEach(($details) => {
    $details.removeAttribute('open')
  })
}
