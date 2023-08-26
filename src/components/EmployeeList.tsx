
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { EmployeeDetails } from '../api/types'; // Import the EmployeeDetails type from your API

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeDetails[]>([]);

  useEffect(() => {
    // Fetch the list of employees from the API
    const fetchEmployees = async () => {
      try {
        const response = await fetch('/employees'); // Replace with the actual API endpoint for fetching employees
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const renderEmployeeItem = ({ item }: { item: EmployeeDetails }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.contactInfo}</Text>
      {/* Render other employee details as needed */}
    </View>
  );

  return (
    <View>
      <Text>Employee List</Text>
      <FlatList
        data={employees}
        renderItem={renderEmployeeItem}
        keyExtractor={(item) => item.employeeId}
      />
    </View>
  );
};

export default EmployeeList;