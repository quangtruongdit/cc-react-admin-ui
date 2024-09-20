// src/hooks/useOrders.ts
import { useReducer, useEffect } from 'react';
import { orders } from '../data';

// Define the order type
interface Order {
    id: number;
    img?: string;
    title: string;
    color: string;
    price: string;
    producer: string;
    createdAt: string;
}

// Define the state type
interface State {
    orders: Order[];
    loading: boolean;
    error: string | null;
}

// Define the action types and payloads
interface FetchOrdersRequestAction {
    type: 'FETCH_ORDERS_REQUEST';
}

interface FetchOrdersSuccessAction {
    type: 'FETCH_ORDERS_SUCCESS';
    payload: Order[];
}

interface FetchOrdersFailureAction {
    type: 'FETCH_ORDERS_FAILURE';
    payload: string;
}

type Action =
    | FetchOrdersRequestAction
    | FetchOrdersSuccessAction
    | FetchOrdersFailureAction;

// Initial state
const initialState: State = {
    orders: [],
    loading: false,
    error: null,
};

// Reducer function with proper types
const ordersReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'FETCH_ORDERS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_ORDERS_SUCCESS':
            return { ...state, loading: false, orders: action.payload };
        case 'FETCH_ORDERS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// Fetch orders function with dispatch type
const fetchOrders = async (dispatch: React.Dispatch<Action>) => {
    dispatch({ type: 'FETCH_ORDERS_REQUEST' });
    try {
        // const response = await fetch('/api/orders'); // Replace with your API endpoint
        // const data: Order[] = await response.json();
        // dispatch({ type: 'FETCH_ORDERS_SUCCESS', payload: data });

        dispatch({ type: 'FETCH_ORDERS_SUCCESS', payload: orders });

    } catch (error) {
        // Type check and handle 'unknown' error
        if (error instanceof Error) {
            dispatch({ type: 'FETCH_ORDERS_FAILURE', payload: error.message });
        } else {
            dispatch({ type: 'FETCH_ORDERS_FAILURE', payload: 'An unexpected error occurred' });
        }
    }
};


// Custom hook to manage orders state
export const useOrders = () => {
    const [state, dispatch] = useReducer(ordersReducer, initialState);

    useEffect(() => {
        fetchOrders(dispatch);
    }, []);

    return state;
};
