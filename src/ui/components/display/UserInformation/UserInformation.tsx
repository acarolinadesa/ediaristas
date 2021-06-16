import React from 'react'
import { Container } from '@material-ui/core'
import { UserInformationContainer, UserName, UserDescription, AvatarStyled, RatingStyled } from './UserInformation.style'

interface UserInformationProps{
  picture: string;
  username: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({picture, username, rating, description}) => {

  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{username[0]}</AvatarStyled>
      <UserName> {username} </UserName>
      <RatingStyled readOnly value={rating}/>
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>

  )
}

export default UserInformation;