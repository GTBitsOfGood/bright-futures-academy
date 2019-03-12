import React from 'react';
    /**
       * Return whether React is in dev or production
       */
    export function ReactIsInDevelomentMode(){ 
        return '_self' in React.createElement('div');
      }

