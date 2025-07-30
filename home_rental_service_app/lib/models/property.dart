class Property {
  final String? id; // Make ID optional for new properties
  final String location;
  final String type;
  final double size; // in square units (e.g., sq ft, sq m)
  final int bedrooms;
  final int bathrooms;
  final List<String> amenities; // List of strings for amenities
  final double rentalPrice; // Use double for price
  final List<String> photoUrls; // List of strings for photo URLs
  final String? description; // Optional description
  final String? ownerId; // Optional ID of the owner

  Property({
    this.id,
    required this.location,
    required this.type,
    required this.size,
    required this.bedrooms,
    required this.bathrooms,
    required this.amenities,
    required this.rentalPrice, // Ensure rentalPrice is required
    required this.photoUrls, // Ensure photoUrls is required
    this.description,
    this.ownerId,
  });

  // Optional: Add methods for converting to/from JSON or other formats
  Map<String, dynamic> toMap() {
    return {
      'location': location, 'type': type, 'size': size, 'bedrooms': bedrooms, 'bathrooms': bathrooms, 'amenities': amenities, 'rentalPrice': rentalPrice, 'photoUrls': photoUrls, 'description': description, 'ownerId': ownerId,
    };
  }

  static Property fromMap(Map<String, dynamic> map) {
    return Property(
      id: map['id'],
      location: map['location'],
      type: map['type'],
      size: map['size'],
      bedrooms: map['bedrooms'],
      bathrooms: map['bathrooms'],
      amenities: List<String>.from(map['amenities']),
      rentalPrice: map['rentalPrice'],
      photoUrls: List<String>.from(map['photoUrls']),
      description: map['description'],
      ownerId: map['ownerId'],
    );
  }
}