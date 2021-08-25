export const getEmployeeFromJson = ({ id, picture, name, location }) => ({
  id,
  avatar: picture && picture.thumbnail,
  name: name && `${name.first} ${name.last}`,
  position: location && location.country,
});
