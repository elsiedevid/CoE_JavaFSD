import 'package:flutter/material.dart';

import 'localization.dart';
import 'weather_page.dart';

class HomePage extends StatefulWidget {
  final Function(Locale) onLocaleChange;

  HomePage({required this.onLocaleChange});

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String _selectedLanguage = 'en';

  final Map<String, String> _languages = {
    'en': 'English',
    'es': 'Español',
    'fr': 'Français',
    'ta': 'தமிழ்',
    'te': 'తెలుగు',
    'hi': 'हिन्दी',
    'kn': 'ಕನ್ನಡ',
    'ml': 'മലയാളം',
    'bn': 'বাংলা',
  };

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue.shade700,
        leading: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Icon(
            Icons.wb_sunny,
            color: Colors.yellowAccent,
            size: 30,
          ), // Weather Icon
        ),
        actions: [
          DropdownButton<String>(
            value: _selectedLanguage,
            icon: Icon(Icons.language, color: Colors.white),
            dropdownColor: Colors.blue.shade700,
            items:
                _languages.keys.map((String key) {
                  return DropdownMenuItem<String>(
                    value: key,
                    child: Text(
                      _languages[key]!,
                      style: TextStyle(color: Colors.white),
                    ),
                  );
                }).toList(),
            onChanged: (String? newValue) {
              if (newValue != null) {
                setState(() {
                  _selectedLanguage = newValue;
                });
                widget.onLocaleChange(Locale(newValue));
              }
            },
          ),
          SizedBox(width: 15),
        ],
      ),
      body: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [Colors.blue.shade900, Colors.blue.shade400],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ShaderMask(
              shaderCallback: (Rect bounds) {
                return LinearGradient(
                  colors: [Colors.yellow, Colors.orange, Colors.red],
                ).createShader(bounds);
              },
              child: Text(
                AppLocalizations.of(context).translate('welcome'),
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
                textAlign: TextAlign.center,
              ),
            ),
            SizedBox(height: 10),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Text(
                AppLocalizations.of(context).translate('description'),
                style: TextStyle(fontSize: 18, color: Colors.white70),
                textAlign: TextAlign.center,
              ),
            ),
            SizedBox(height: 40),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => WeatherPage()),
                );
              },
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.symmetric(horizontal: 30, vertical: 15),
                backgroundColor: Colors.orangeAccent,
                elevation: 10,
                shadowColor: Colors.black54,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30),
                ),
              ),
              child: Text(
                AppLocalizations.of(context).translate('explore_weather'),
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
