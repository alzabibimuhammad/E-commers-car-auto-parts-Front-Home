import { Box, CircularProgress, MenuItem, Select, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import PartCard from "../../features/parts/components/partCard";
import GetAllParts from "../../features/parts/query/GetAllParts";

export default function Parts() {
  const { data } = GetAllParts();

  const Data = data?.data;

  const [filterData, setFilterData] = useState(Data);

  const [category, setCategory] = useState('');
  const [Brand, setBrand] = useState('');
  const [Model, setModel] = useState('');

  let categories = new Set([]);
  filterData?.forEach((element) => {
    if (element?.category?.name) categories.add(element?.category?.name);
  });

  let brand = new Set([]);
  filterData?.forEach((element) => {
    if (element?.type) brand.add(element?.type);
  });

  let model = new Set([]);
  filterData?.forEach((element) => {
    if (element?.model_id) model.add(element?.model_id);
  });

  useEffect(() => {
    let filter = Data
    if (category) filter = filter?.filter((ele, index) => ele?.category?.name == category)
    if (Brand) filter = filter?.filter((ele, index) => ele?.type == Brand)
    if (Model) filter = filter?.filter((ele, index) => ele?.model_id == Model)
    setFilterData(filter);
  }, [Data, category, Model, Brand]);

  return (
    <Stack spacing={3}>
      <Stack
        direction={"row"}
        marginTop={2}
        spacing={3}
        justifyContent={"center"}
      >
        <select onChange={(e) => setCategory(e.target.value)} style={{ width: "200px" }}>
          <option key="" value="" selected>
            Categoris
          </option>
          {Array.from(categories).map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>

        <select onChange={(e) => setBrand(e.target.value)} style={{ width: "200px" }}>
          <option selected value="" key="">
            Brand
          </option>
          {Array.from(brand).map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>
        <select onChange={(e) => setModel(e.target.value)} style={{ width: "200px" }}>
          <option value="" key="">
            Model
          </option>
          {Array.from(model).map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>
      </Stack>

      {filterData ? (
        <PartCard Data={filterData} type={'part'} />
      ) : (
        <Box
          sx={{
            display: "flex",
            height: "50vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Stack>
  );
}
