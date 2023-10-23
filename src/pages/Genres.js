import React, {useState} from 'react'
import SelectGenres from '../components/SelectGenres'
import Category from '../components/Category'
import {useNavigate} from 'react-router-dom';

const Genres = () => {

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };

  const navigate = useNavigate();

  const handleClick = () => {
   
    if (selectedCategory.length >= 3) {
      setShowErrorMessage(false); 
      navigate('/Profile'); 
    } else {
      setShowErrorMessage(true);
    }
    window.localStorage.setItem('selectedCategory',JSON.stringify(selectedCategory))
  };
  
 

  return (
    <>
<div style={{display:'flex',justifyContent:'space-evenly', padding:'80px'}}>
 <SelectGenres chooseCategory={selectedCategory} setChooseCategory={setSelectedCategory} showErrorMessage={showErrorMessage}/>

<div className='categories'>
<div  className='card'>
<Category
 color='action'
 category='Action'
    imageUrl='https://images.news18.com/ibnlive/uploads/2022/04/pjimage-21.jpg'
 onClick={() => handleCategoryClick('Action')}
  isSelected={selectedCategory.includes('Action')}
  />
</div>
<div  className='card'>
<Category 
color='drama'
   category='Drama'
    imageUrl='https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1666014781.webp'
    onClick={() => handleCategoryClick('Drama')}
    isSelected={selectedCategory.includes('Drama')}
  />
</div>
<div  className='card'>
<Category
color='romance'
 category='Romance'
    imageUrl='https://wordpress.wbur.org/wp-content/uploads/2019/06/Titanic-1.jpg'
    onClick={() => handleCategoryClick('Romance')}
  isSelected={selectedCategory.includes('Romance')}
  />
</div>
<div  className='card'>
<Category
color='thriller'
 category='Thriller'
    imageUrl='https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2009/7/9/1247134761602/Scene-from-Shutter-Island-001.jpg?width=620&quality=85&auto=format&fit=max&s=5cd4a0867eeb261be57e5164f83035ae'
    onClick={() => handleCategoryClick('Thriller')}
  isSelected={selectedCategory.includes('Thriller')}
  />
</div>
<div  className='card'>
<Category 
color='western'
category='Western'
    imageUrl='https://www.irishtimes.com/resizer/YFmnQb4z5QB425wwL0-KIOgjN2Y=/1600x1200/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/H7UACXN5FENXHFZRG7OZAR4TYQ.jpg'
    onClick={() => handleCategoryClick('Western')}
  isSelected={selectedCategory.includes('Western')}
  />
</div>
<div  className='card'>
<Category 
color='horror'
category='Horror'
    imageUrl='https://assets-prd.ignimgs.com/2023/09/04/blogroll-thumbnail-nunii-1693820607389.jpg'
    onClick={() => handleCategoryClick('Horror')}
  isSelected={selectedCategory.includes('Horror')}
  />
</div>
<div  className='card'>
<Category 
color='fantasy'
category='Fantasy'
    imageUrl='https://www.pluggedin.com/wp-content/uploads/2019/12/the-avengers-review-image-1200x688.jpg'
    onClick={() => handleCategoryClick('Fantasy')}
  isSelected={selectedCategory.includes('Fantasy')}
  />
</div>
<div  className='card'>
<Category 
color='music'
category='Music'
    imageUrl='https://m.media-amazon.com/images/I/61ZkesvoXFL._UF1000,1000_QL80_.jpg'
    onClick={() => handleCategoryClick('Music')}
  isSelected={selectedCategory.includes('Music')}
  />
</div>
<div  className='card'>
<Category 
color='fiction'
category='Fiction'
    imageUrl='https://sm.mashable.com/mashable_in/seo/3/38983/38983_u23h.jpg'
    onClick={() => handleCategoryClick('Fiction')}
  isSelected={selectedCategory.includes('Fiction')}
  />
</div>
</div>
      <button className='nextPage' onClick={handleClick}>Next Page</button>
 </div>
    </>
  )
}

export default Genres
