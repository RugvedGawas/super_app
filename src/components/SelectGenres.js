import React from 'react'

const SelectGenres = ({chooseCategory,setChooseCategory, showErrorMessage}) => {

  const handleRemove = (category) => {
    setChooseCategory((prevSelected) => prevSelected.filter((item) => item !== category));
  };
  return (
    <>
       <div className='container'>
    <span className='appName'>Super App</span><br/>
    <h1>Choose your entertainment categories</h1>
        {chooseCategory.map((category) => (
          <div key={category} className="preference-chip">
            {category}
            <button className="removebutton" onClick={() => handleRemove(category)}>
            X
            </button>
          </div>
        ))}
        <div>
        {showErrorMessage &&
        <h1 style={{ color: 'red' }}>Please select at least three categories</h1>
      }
        </div>
    </div>
    </>
  )
}

export default SelectGenres
