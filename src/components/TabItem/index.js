import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onChangeTabId = () => {
    updateTabId(tabId)
  }

  const activeStatusLine = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeStatusLine}`}
        onClick={onChangeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
