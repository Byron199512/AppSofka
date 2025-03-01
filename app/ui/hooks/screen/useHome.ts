import React, { useContext, useEffect, useState } from 'react'
import { IProductResponse } from '../../../core/models/product/ProductResponse';
import { DependencyContext } from '../../context/dependency/DependencyContext';

export const useHome = () => {
  const { productUseCase } = useContext(DependencyContext);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<IProductResponse[]>([])
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    const getData = (async () => {
      const resp = await productUseCase.getAll();
      setData(resp.data);
      setRefreshing(false);
    })
    if (refreshing)
      getData()
  }, [refreshing])

  useEffect(() => {
    if (search.trim().length > 0)
      setData(data.filter(x => x.name.toLowerCase().includes(search.toLocaleLowerCase())))
    else
      setRefreshing(true);
  }, [search])


  return {
    data,
    refreshing,
    setSearch,
    setRefreshing

  }
}
