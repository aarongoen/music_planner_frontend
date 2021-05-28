import React from 'react';

const PieceListItem = ({ piece }) => {
    // let piece = pieces[match.params.pieceId]
        return (  
          <div>
          hello from PieceListItem
          <div className="PieceListItem" key={piece.id}>
            <h5>{ piece?.title }: { piece?.composer }</h5>
              <ul>Voicing: { piece?.voicing }</ul> 
              <ul>Publisher: { piece?.publisher } </ul> 
              <ul>Collection: { piece?.collection }</ul> 
          </div>
           

          </div>
        );
      }

export default PieceListItem;