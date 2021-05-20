const PieceShow = ({match, pieces}) => {

    let piece = pieces[match.params.pieceId]
    
        return (  
     
          <div>
            <h3>{ piece?.title }</h3>
            { piece?.composer }
            <h3>Voicing: </h3> { piece?.voicing }
            <h3>Publisher:</h3> { piece?.publisher } 
            <h3>Collection:</h3> { piece?.collection }

          </div>
        );
      }