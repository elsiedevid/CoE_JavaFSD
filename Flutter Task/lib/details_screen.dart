import 'package:flutter/material.dart';

class DetailsScreen extends StatelessWidget {
  final String weatherDetails;

  DetailsScreen({required this.weatherDetails});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Weather Details')),
      body: Center(
        child: Text(
          weatherDetails,
          style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }
}
