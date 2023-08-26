
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TaskDetails } from '../api/types';
import { getTasks } from '../api/tasks';

const TaskAssignmentScreen: React.FC = () => {
  const [tasks, setTasks] = useState<TaskDetails[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const renderTaskItem = ({ item }: { item: TaskDetails }) => (
    <View>
      <Text>{item.taskName}</Text>
      <Text>{item.description}</Text>
      {/* Render other task details */}
    </View>
  );

  return (
    <View>
      <Text>Task Assignment Screen</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.taskId}
      />
    </View>
  );
};

export default TaskAssignmentScreen;