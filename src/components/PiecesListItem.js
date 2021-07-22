import React from 'react';

const PieceListItem = (props) => {
    let piece = props.piece


        return (  
          <div>
            {/* hello from PieceListItem */}
            <div className="PieceListItem" key={piece.id}>
              <h5>{ piece?.title }: { piece?.composer }</h5>
                <ul>Voicing: { piece?.voicing }</ul> 
                <ul>Publisher: { piece?.publisher } </ul> 
                <ul>Collection: { piece?.collection }</ul> 
                 
                <button 
                  onClick={props.onDelete}>delete
                </button>
            </div>
          </div>
        );
      }

export default PieceListItem;