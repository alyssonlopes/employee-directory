import { createServer } from "miragejs";

const EMPLOYEES = [
  {
    gender: "male",
    name: { title: "Mr", first: "Kasper", last: "Sørensen" },
    location: {
      street: { number: 2344, name: "Nørrevej" },
      city: "København Ø",
      state: "Danmark",
      country: "Denmark",
      postcode: 56591,
      coordinates: { latitude: "-29.4230", longitude: "-90.0422" },
      timezone: { offset: "-9:00", description: "Alaska" },
    },
    email: "kasper.sorensen@example.com",
    login: {
      uuid: "7e139718-fc36-4a75-bd7b-2b9c6adf36ac",
      username: "lazypanda265",
      password: "snowball",
      salt: "0VnBPEwE",
      md5: "7223d03e4956e66f84733f21777c8da9",
      sha1: "ad20dd7c9d91c640a4ef223539c4ea6ffb046ccb",
      sha256:
        "b2b8ebc8b8d3b75962491ef58e03da8d99e455017b88e773cd8362cc3272034b",
    },
    dob: { date: "1982-09-20T03:58:30.939Z", age: 39 },
    registered: { date: "2012-03-15T09:25:53.842Z", age: 9 },
    phone: "46892467",
    cell: "12242472",
    id: 1,
    picture: {
      large: "https://randomuser.me/api/portraits/men/80.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/80.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
    },
    nat: "DK",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Buse", last: "Bayındır" },
    location: {
      street: { number: 6924, name: "Abanoz Sk" },
      city: "Niğde",
      state: "Karabük",
      country: "Turkey",
      postcode: 65983,
      coordinates: { latitude: "-66.0248", longitude: "-98.0187" },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "buse.bayindir@example.com",
    login: {
      uuid: "4746c4ab-f0ec-4134-9b6a-f92c702cd412",
      username: "blackkoala523",
      password: "aaliyah",
      salt: "iVBbkW3s",
      md5: "7f5035f26515f5ba4ce9e20257303515",
      sha1: "c7a4e9454ddf6779adf38562c5de207c6ae4581c",
      sha256:
        "9f81880b75b1ce1d729d704cec60795f5c79c0880a62fa74e55d03ad0b060f56",
    },
    dob: { date: "1982-07-06T10:52:44.065Z", age: 39 },
    registered: { date: "2008-05-31T21:28:14.572Z", age: 13 },
    phone: "(699)-223-5754",
    cell: "(559)-025-4575",
    id: 2,
    picture: {
      large: "https://randomuser.me/api/portraits/women/32.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
    },
    nat: "TR",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Abigail", last: "Brooks" },
    location: {
      street: { number: 9865, name: "Hamilton Ave" },
      city: "Columbus",
      state: "Ohio",
      country: "United States",
      postcode: 99685,
      coordinates: { latitude: "-12.3987", longitude: "-10.6981" },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "abigail.brooks@example.com",
    login: {
      uuid: "b55aee33-58b8-4699-b038-68b9f90113f5",
      username: "bigkoala157",
      password: "skeeter",
      salt: "lHknPhfA",
      md5: "c254d6a2236b2239d8be05e65cbb6a8b",
      sha1: "85bd1e25f556ad6c15ad4aa6d8b5ddca17499d7c",
      sha256:
        "7859cf56f7334cbd674c02f2ab03c425c6e04b2f2937b6ef2752cbe1a291d7f1",
    },
    dob: { date: "1975-01-31T21:30:04.528Z", age: 46 },
    registered: { date: "2002-08-19T15:31:55.300Z", age: 19 },
    phone: "(304)-261-4262",
    cell: "(445)-554-7919",
    id: 3,
    picture: {
      large: "https://randomuser.me/api/portraits/women/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "بیتا", last: "رضاییان" },
    location: {
      street: { number: 5120, name: "داودی" },
      city: "بروجرد",
      state: "هرمزگان",
      country: "Iran",
      postcode: 12824,
      coordinates: { latitude: "-54.5692", longitude: "66.0579" },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "byt.rdyyn@example.com",
    login: {
      uuid: "f2823a11-6d17-4190-9617-3a273b476999",
      username: "greenbutterfly665",
      password: "albatros",
      salt: "55LqwuPu",
      md5: "826393d3f6a2f6312d71eb90a38e208e",
      sha1: "97120f540a48f44c6331c6073640f8ed32c9096d",
      sha256:
        "2ee3d28f150f84a59b0a050a19e292b171ffaeb01fcdbffe22946b56638288d5",
    },
    dob: { date: "1960-02-16T15:10:52.119Z", age: 61 },
    registered: { date: "2009-04-10T19:07:25.782Z", age: 12 },
    phone: "086-17914801",
    cell: "0940-211-7426",
    id: 4,
    picture: {
      large: "https://randomuser.me/api/portraits/women/76.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/76.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/76.jpg",
    },
    nat: "IR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Kevin", last: "Fitzpatrick" },
    location: {
      street: { number: 2110, name: "Albert Road" },
      city: "Carrickmacross",
      state: "Fingal",
      country: "Ireland",
      postcode: 60596,
      coordinates: { latitude: "-13.1745", longitude: "96.0594" },
      timezone: { offset: "-10:00", description: "Hawaii" },
    },
    email: "kevin.fitzpatrick@example.com",
    login: {
      uuid: "f2ee3fd6-07ea-4bb4-b988-33b0ee9455a5",
      username: "crazysnake830",
      password: "womam",
      salt: "cXyVWXdV",
      md5: "016330879be7ac234378f29b0688c63b",
      sha1: "c39222e3d74bb863040af9c7255937c6ac1ada1a",
      sha256:
        "8060a411e63b97cfe89be7f00a1458604c208fe6dbd3178ef60b0941fe628a76",
    },
    dob: { date: "1997-02-22T14:07:08.959Z", age: 24 },
    registered: { date: "2017-05-09T09:56:02.183Z", age: 4 },
    phone: "011-058-9111",
    cell: "081-948-2481",
    id: 5,
    picture: {
      large: "https://randomuser.me/api/portraits/men/66.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/66.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/66.jpg",
    },
    nat: "IE",
  },
];

createServer({
  routes() {
    this.namespace = "api";

    this.get("/verifica-email/:email", (schema, request) => {
      let email = request.params.email;
      let isValid = email === "teste@devinhouse.com";
      return {
        validity: isValid,
      };
    });

    this.get("/positions", () => {
      return {
        positions: ["Aluno", "Professor", "Coordenador"],
      };
    });

    this.get("/employees/:id", (schema, request) => {
      const { id } = request.params;

      return EMPLOYEES.find((employee) => employee.id === Number(id));
    });

    this.get("/employees", () => {
      return {
        results: EMPLOYEES,
        info: { seed: "19b666186c1dc78f", results: 5, page: 1, version: "1.3" },
      };
    });
  },
});
