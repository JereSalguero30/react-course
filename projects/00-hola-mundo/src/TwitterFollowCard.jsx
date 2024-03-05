import { useState } from "react";



export function TwitterFollowCard ({formatUserName, userName, user, isFollowing}) {
    const [isFollowing, setIsFollowing] = useState(false)// esto es lo mismo que lo de abajo pero con desestructuracion
    
    
    // const state = useState(isFollowing);
    // const isFollowing = state[0];
    // const setIsFollowing = state[1];
    
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
        
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                src={`https://unavatar.io/${userName}`} 
                alt="El avatar de X" 
                className='tw-follow-card-avatar'
                />
                <div className='tw-follow-card-info'>
                    <strong>{user}</strong>
                    <span>@{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button"onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}