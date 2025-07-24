import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your virtual assistant for Jhanina Luxe Decor. How can I help you today? I can answer questions about our services, pricing, availability, or help you plan your event!",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");

  const predefinedResponses: { [key: string]: string } = {
    "pricing": "Our pricing varies by service: Floral Centerpieces start at $85, Balloon Designs at $65, Wedding Centerpieces at $125, and Luxury Packages at $250. We also offer custom quotes for larger events!",
    "services": "We offer Floral Centerpieces, Balloon Designs, Wedding Centerpieces, Corporate Event Decor, Special Occasion arrangements, and complete Luxury Packages. Each service is customized to your vision!",
    "booking": "You can book a consultation through our booking form on this page, call us at (555) 123-4567, or email info@jhaninaluxedecor.com. We respond within 24 hours!",
    "availability": "We typically book events 2-4 weeks in advance, but we can accommodate rush orders depending on availability. Peak wedding season (May-October) books up faster, so early booking is recommended!",
    "delivery": "Yes! We provide delivery and setup services within a 50-mile radius. Our team will arrive 2-4 hours before your event to set up all centerpieces perfectly.",
    "colors": "Absolutely! We can match any color scheme. Just provide us with color swatches, photos, or descriptions and we'll create centerpieces that perfectly complement your theme.",
    "flowers": "We use only premium fresh flowers sourced from local and international suppliers. Popular choices include roses, peonies, hydrangeas, eucalyptus, and seasonal blooms.",
    "balloons": "Our balloon designs feature high-quality latex and metallic balloons in various sizes. We create elegant bouquets, garlands, and custom arrangements that complement your event's sophistication."
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key) || message.includes(key.slice(0, -1))) {
        return response;
      }
    }

    if (message.includes("hello") || message.includes("hi")) {
      return "Hello! I'm here to help you plan your perfect event. What would you like to know about our centerpiece services?";
    }

    if (message.includes("wedding")) {
      return "Wonderful! Weddings are our specialty. Our wedding centerpieces start at $125 and include bridal consultation, venue coordination, and professional setup. Would you like to schedule a consultation to discuss your vision?";
    }

    if (message.includes("corporate")) {
      return "Perfect! We love creating sophisticated corporate event decor. We can integrate your brand colors and provide professional setup. Corporate packages include bulk pricing and event coordination. What type of corporate event are you planning?";
    }

    if (message.includes("contact")) {
      return "You can reach us at (555) 123-4567, email info@jhaninaluxedecor.com, or use our booking form. We're also located in the heart of the city and offer free consultations!";
    }

    return "That's a great question! For specific details about that, I'd recommend scheduling a consultation with our team. They can provide personalized recommendations based on your unique needs. Would you like me to help you book a consultation?";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    const assistantResponse: Message = {
      id: messages.length + 2,
      text: generateResponse(inputText),
      sender: 'assistant',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, assistantResponse]);
    setInputText("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are your pricing options?",
    "Do you offer wedding packages?",
    "Can you match my color scheme?",
    "Do you provide delivery and setup?"
  ];

  return (
    <>
      {/* Floating Assistant Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-luxury bg-gradient-to-r from-accent to-accent-glow hover:scale-110 transition-all duration-300"
          size="icon"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-luxury border-border/50 bg-card">
          <CardHeader className="pb-3 bg-gradient-to-r from-primary to-luxury text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="font-luxury text-lg flex items-center gap-2">
                <Bot className="w-5 h-5" />
                Jhanina Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-[400px]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-accent-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg font-elegant text-sm ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-border/50">
                <p className="font-elegant text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="space-y-1">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputText(question)}
                      className="block w-full text-left text-xs p-2 rounded bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors font-elegant"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="font-elegant text-sm border-border/50 focus:border-accent"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  variant="luxury"
                  className="flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default VirtualAssistant;