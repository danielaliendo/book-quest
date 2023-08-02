export const Book = ({
                       imageUrl = 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/346/original/portada_madrid-me-mata_elvira-sastre_202201260822.jpg',
                       title = 'Madrid Me Mata',
                       description = 'Diario de Mi Despertar en una Gran Ciudad',
                       author = 'Elvira Sastre',
                       content = 'Madrid me mata recorre más de dos años en la vida de Elvira Sastre.',
                       hasPreview = false,
                     }) => {
  return (
    <div>
      <img
        style={{width: '100px'}}
        src={imageUrl}
        alt={`Portada del libro: ${author}`}
      />
      <div>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <div>
          <h2>{author}</h2>
          <p>2015</p>
          {!hasPreview && <p>Sin vista previa</p>}
        </div>
        <p>{content}</p>
      </div>
    </div>
  )
}