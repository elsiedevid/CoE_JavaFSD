import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import 'favorite_cities_page.dart';

class WeatherPage extends StatefulWidget {
  @override
  _WeatherPageState createState() => _WeatherPageState();
}

class _WeatherPageState extends State<WeatherPage> {
  String _selectedCity = 'London';
  String _weather = 'Fetching weather data...';
  List<String> favoriteCities = [];

  final List<String> _cities = [
    'London',
    'New York',
    'Tokyo',
    'Paris',
    'Berlin',
    'Moscow',
    'Sydney',
    'Toronto',
    'Dubai',
    'Singapore',
    'Hong Kong',
    'Bangkok',
    'Rome',
    'Istanbul',
    'Los Angeles',
    'Chicago',
    'Mumbai',
    'Beijing',
    'Seoul',
    'Madrid',
  ];

  @override
  void initState() {
    super.initState();
    _fetchWeather(_selectedCity);
  }

  Future<void> _fetchWeather(String city) async {
    final url = Uri.parse(
      'http://api.weatherapi.com/v1/current.json?key=32b9d034419541daacc70810252603&q=$city&aqi=no',
    );

    try {
      final response = await http.get(url);

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        setState(() {
          _weather = '''
🌍 City: ${data['location']['name']}
🌡 Temperature: ${data['current']['temp_c']}°C
🌥 Condition: ${data['current']['condition']['text']}
💧 Humidity: ${data['current']['humidity']}%
💨 Wind: ${data['current']['wind_kph']} kph
''';
        });
      } else {
        setState(() {
          _weather = 'Error: Unable to fetch weather data';
        });
      }
    } catch (e) {
      setState(() {
        _weather = 'Error: $e';
      });
    }
  }

  void _toggleFavorite() {
    setState(() {
      if (favoriteCities.contains(_selectedCity)) {
        favoriteCities.remove(_selectedCity);
      } else {
        favoriteCities.add(_selectedCity);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true, // Ensures background extends to status bar
      appBar: AppBar(
        title: Text('Weather Information'),
        backgroundColor: Colors.transparent,
        elevation: 0,
        actions: [
          IconButton(
            icon: Icon(Icons.favorite, color: Colors.red),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => FavoriteCitiesPage(favoriteCities),
                ),
              );
            },
          ),
        ],
      ),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [Colors.blue.shade900, Colors.blue.shade500],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                // 🔹 Dropdown with Better Styling
                Container(
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.3),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  padding: EdgeInsets.symmetric(horizontal: 12),
                  child: DropdownButton<String>(
                    value: _selectedCity,
                    dropdownColor: Colors.blue.shade700,
                    style: TextStyle(color: Colors.white, fontSize: 18),
                    icon: Icon(Icons.arrow_drop_down, color: Colors.white),
                    underline: SizedBox(),
                    items:
                        _cities.map((String city) {
                          return DropdownMenuItem<String>(
                            value: city,
                            child: Text(
                              city,
                              style: TextStyle(color: Colors.white),
                            ),
                          );
                        }).toList(),
                    onChanged: (String? newCity) {
                      if (newCity != null) {
                        setState(() {
                          _selectedCity = newCity;
                          _weather = 'Fetching weather data...';
                        });
                        _fetchWeather(newCity);
                      }
                    },
                  ),
                ),
                SizedBox(height: 20),

                // 🔹 Weather Info Card
                Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20),
                  ),
                  elevation: 10,
                  color: Colors.white.withOpacity(0.2), // Glassmorphism Effect
                  child: Padding(
                    padding: EdgeInsets.all(20),
                    child: Column(
                      children: [
                        Icon(
                          Icons.wb_sunny,
                          color: Colors.yellowAccent,
                          size: 50,
                        ),
                        SizedBox(height: 10),
                        Text(
                          _weather,
                          style: TextStyle(fontSize: 18, color: Colors.white),
                          textAlign: TextAlign.center,
                        ),
                      ],
                    ),
                  ),
                ),
                SizedBox(height: 20),

                // 🔹 Favorite Button
                ElevatedButton.icon(
                  onPressed: _toggleFavorite,
                  icon: Icon(
                    favoriteCities.contains(_selectedCity)
                        ? Icons.star
                        : Icons.star_border,
                    color: Colors.yellowAccent,
                  ),
                  label: Text(
                    favoriteCities.contains(_selectedCity)
                        ? 'Remove from Favorites'
                        : 'Add to Favorites',
                    style: TextStyle(fontSize: 16),
                  ),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.orangeAccent,
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 15),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
