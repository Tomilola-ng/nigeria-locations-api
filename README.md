# Nigeria Locations

A comprehensive JSON dataset of all Nigerian states and their corresponding local government areas (LGAs). This repository aims to simplify the work of developers by providing accurate and structured location data for Nigeria.

![Nigeria Location API Preview](https://tomilola-ng.github.io/images/ngn-location-api-preview-img.webp)

## 🚀 Features

- **Easy-to-Use JSON Format:** Ready-to-use for web and mobile applications.
- **Complete Data:** Includes all 36 states and the Federal Capital Territory (FCT), along with their LGAs.
- **Extensible:** Can be expanded to include additional metadata such as state capitals, coordinates, or population data.

## 🚀 New API Features

### REST API Endpoints

The project now includes a RESTful API for accessing Nigerian location data:

#### Get All States

```bash
GET /api/states
```

Returns a list of all Nigerian states.

#### Get LGAs by State

```bash
GET /api/states/:state/lgas
```

Returns all Local Government Areas in a specific state.
Example: `/api/states/lagos/lgas`

#### Search LGAs

```bash
GET /api/search?q=:searchterm
```

Search for LGAs across all states.
Example: `/api/search?q=north`

#### Validate Location

```bash
GET /api/validate?state=:state&lga=:lga
```

Validate state and LGA combinations.
Examples:

- Validate state: `/api/validate?state=lagos`
- Validate LGA: `/api/validate?state=lagos&lga=ikeja`

### 🛠️ API Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Access the API at `http://localhost:3000/api/states`

### 🔒 CORS Support

The API includes CORS support, allowing it to be accessed from different domains.

### 🧪 Error Handling

- Invalid state names return 404 error
- Missing search queries return 400 error
- Server errors return 500 error with appropriate messages

## 🧱 Structure

The JSON data is organized in the following format:

```json
[
  {
    "state": "lagos",
    "localGovt": ["Alimosho", "Agege", ...]
  },
  ...
]
```

## 🧰 Usage

1. Give this [Repository](https://github.com/Tomilola-ng/nigeria-locations-json.git) a Star:
2. Download and Import the :

   - [LATEST JSON](data/v1-data.json)
   - [LATEST YAML](data/v1-data.yaml)
   - [LATEST TOML](data/v1-data.toml)
     file into your project.

3. Parse and use the data as needed.

## 🧑‍🤝‍🧑 Contributions

Contributions are welcome! If you notice any inaccuracies or have suggestions for improvement, please open an issue or submit a pull request.

## 📜 License

This project is licensed under the General Public License. See the [LICENSE](LICENSE) file for details.
