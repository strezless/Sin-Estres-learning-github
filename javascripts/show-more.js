/*
 *  This utility component implement a list of items, some of which are hidden initially
 *  until user clicks "show more".
 *
 *  Example:
 *
 *  <div class="js-show-more-container">
 *    <div class="js-show-more-item">item</div>
 *    <div class="js-show-more-item d-none">hidden item</div>
 *    <div class="js-show-more-item d-none">hidden item</div>
 *    <button class="js-show-more-button" data-js-show-more-items="1">show one more item</button>
 *  </div>
*/

export default function showMore () {
  const buttons = document.querySelectorAll('.js-show-more-button')

  for (const btn of buttons) {
    btn.addEventListener('click', evt => {
      const container = evt.currentTarget.closest('.js-show-more-container')
      if (!container) return
      const hiddenLinks = container.querySelectorAll('.js-show-more-item.d-none')
      // get number of items to show more of, if not set, show all remaining items
      const showMoreNum = evt.currentTarget.dataset.jsShowMoreItems || hiddenLinks.length
      let count = 0
      for (const link of hiddenLinks) {
        if (count++ >= showMoreNum) {
          break
        }
        link.classList.remove('d-none')
      }
      // Remove the button if all items have been shown
      if (container.querySelectorAll('.js-show-more-item.d-none').length === 0) {
        evt.currentTarget.parentElement.removeChild(evt.currentTarget)
      }
    })
  }
}
