import { useState, useEffect } from "react";

interface Ward {
  code: number;
  name: string;
}

interface District {
  code: number;
  name: string;
  wards: Ward[];
}

interface City {
  code: number;
  name: string;
  districts: District[];
}

const apiLocationData = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);

  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/?depth=3")
      .then((res) => res.json())
      .then((data: City[]) => {
        setCities(data);
      })
      .catch((error) => console.error("Lỗi tải dữ liệu:", error));
  }, []);

  const handleCityChange = (cityCode: string | number) => {
    const selected = cities.find((city) => city.code === Number(cityCode)) || null;
    setSelectedCity(selected);
    setSelectedDistrict(null);
    setWards([]);
    setDistricts(selected ? selected.districts : []);
  };

  const handleDistrictChange = (districtCode: string | number) => {
    const selected = districts.find((district) => district.code === Number(districtCode)) || null;
    setSelectedDistrict(selected);
    setWards(selected ? selected.wards : []);
  };

  return {
    cities,
    districts,
    wards,
    selectedCity,
    selectedDistrict,
    handleCityChange,
    handleDistrictChange,
  };
};

export default apiLocationData;