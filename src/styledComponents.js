import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const BannerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`
export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: bold;
`
export const ParaElement = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: bold;
`
export const InputAndListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #152850;
  align-items: center;
  width: 100%;
`
export const HeaderAndInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 20px;
`
export const InputElement = styled.input`
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 14px;
  color: #cbd5e1;
  background-color: transparent;
  font-family: 'Roboto';
  width: 200px;
  padding: 10px;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  overflow-y: auto;
  max-height: 600px;
  flex-direction: column;
  width: 90%;
`
export const ListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  background-color: transparent;
`
export const SongImage = styled.img`
  padding-right: 10px;
  width: 200px;
  border-radius: 10px;
`
export const Title = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: bold;
`
export const Genre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
`
export const LastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 10px;
`
export const Time = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: bold;
`
export const DeleteButton = styled.button`
  border: none;
  color: #cbd5e1;
  background-color: transparent;
  text-align: center;
`
export const NoSongsListContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
export const NoSongsHeading = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 38px;
  font-weight: bold;
`
export const FirstContainer = styled.div`
  display: flex;
  background-color: transparent;
`
