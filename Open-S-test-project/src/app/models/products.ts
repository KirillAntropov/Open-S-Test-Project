

export interface IData {
  
  purchases: IProducts[]
  categories: ICategories[]
}

export interface ICategories {
  
      id: number,
      name: string
    
  
}

export interface IProducts {
  
      id: number,
      name: string,
      category: number,
      price: number
    
  
}

