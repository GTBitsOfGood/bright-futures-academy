import React from 'react';
//Utils file for methods that will be used throughout the product
    /**
       * Return whether React is in dev or production
       */
    export function ReactIsInDevelomentMode(){ 
        return '_self' in React.createElement('div');
      }

