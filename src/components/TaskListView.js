import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

function TaskListView({ tasks, deleteTask }) {
  const getPriorityVariant = (priority) => {
    switch (priority) {
      case 'High':
        return 'danger';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'success';
      default:
        return 'secondary';
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="mt-4 mb-4">Your Tasks</h1>
          {tasks.length === 0 ? (
            <p className="text-muted">No tasks yet. Add your first task!</p>
          ) : (
            <Row>
              {tasks.map((task) => (
                <Col md={6} key={task.id} className="mb-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>{task.title}</Card.Title>
                      <Card.Text>{task.description || 'No description provided.'}</Card.Text>
                      <Badge bg={getPriorityVariant(task.priority)} className="me-2">
                        {task.priority} Priority
                      </Badge>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => deleteTask(task.id)}
                        className="float-end"
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default TaskListView;
