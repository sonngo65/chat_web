import './_user-profile.scss';
const getInitials= (string)=>{
    return string.match(/\b(\w)/g).slice(0,2).join('').toUpperCase();
}


export default function UserProfile({color,name,icon}){
    console.log(getInitials(name))
    return(
        <div className="user-profile" style={{background:color}}>
            {icon!=="" ? <i className={icon}/> : <p>{getInitials(name)}</p>}

        </div>
        
    )
}