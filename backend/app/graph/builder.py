from langgraph.graph import StateGraph, START, END

from app.graph.state import GraphState
from app.graph.nodes.retrieval_node import retrieval_node
from app.graph.nodes.generation_node import generation_node


builder = StateGraph(GraphState)


# Nodes
builder.add_node(
    "retrieval_node",
    retrieval_node
)

builder.add_node(
    "generation_node",
    generation_node
)


# Edges
builder.add_edge(
    START,
    "retrieval_node"
)

builder.add_edge(
    "retrieval_node",
    "generation_node"
)

builder.add_edge(
    "generation_node",
    END
)


graph = builder.compile()