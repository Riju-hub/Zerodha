import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

// Test suite
describe('Hero Component', () => {
    test('renders hero image', () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/homeHero.png');
    });
    test('renders signUp button', () => {
        render(<Hero/>);
        const signUpButton = screen.getByRole('button', { name: /SignUp Now/i });
        expect(signUpButton).toBeInTheDocument();
        expect(signUpButton).toHaveClass('btn btn-primary');
    });
});