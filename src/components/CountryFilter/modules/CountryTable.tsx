import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import 'antd/dist/antd.css';
import { useAppSelector } from '../../../app/hooks';
import { selectCountry } from '../reducer/countrySlice';
import { CountryItem } from '../interfaces';

const columns: ColumnsType<CountryItem> = [
  {
    title: 'Code',
    dataIndex: 'code',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
];

export default function CountryTable() {
  const isCountry = useAppSelector(selectCountry);
  const data: CountryItem[] = isCountry;
  return (
    <Table
      columns={columns}
      pagination={false}
      dataSource={data}
      size="small"
      rowKey={(country:CountryItem) => country.code}
    />
  );
}
