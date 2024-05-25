/* eslint-disable react/prop-types */
function TabButton({ tabName, activeTab, handleChangetab }) {
  return (
    <button
      className={activeTab === tabName ? "active" : ""}
      onClick={() => handleChangetab(tabName)}
    >
      {tabName}
    </button>
  );
}

export default TabButton;
