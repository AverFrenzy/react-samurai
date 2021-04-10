import classes from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
    <div>
    <div>
    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnltfxyRHuEEUE4gIZp9fr77Q8goigP7mQ6Q&usqp=CAU' />
    </div>
    <div className = {classes.discription}>
      ava + discription
    </div>
    </div> )
}

export default ProfileInfo;