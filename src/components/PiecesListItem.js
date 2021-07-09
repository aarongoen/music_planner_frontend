import React from 'react';

const PieceListItem = (props) => {
    let piece = props.piece
    // const handleDelete = piece => {
    //   props.deletePiece(piece.id, piece.dayId)
    // }
        return (  
          <div>
            {/* hello from PieceListItem */}
            <div className="PieceListItem" key={piece.id}>
              <h5>{ piece?.title }: { piece?.composer }</h5>
                <ul>Voicing: { piece?.voicing }</ul> 
                <ul>Publisher: { piece?.publisher } </ul> 
                <ul>Collection: { piece?.collection }</ul> 
                {/* <li key={piece?.id}><button onClick={() => handleDelete(piece)}>Delete</button></li> */}
            </div>
          </div>
        );
      }

export default PieceListItem;