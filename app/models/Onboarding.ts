import mongoose from 'mongoose';

const onboardingSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  },
  tasks: [{
    title: String,
    description: String,
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    },
    dueDate: Date,
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Completed'],
      default: 'Pending'
    }
  }],
  documents: [{
    name: String,
    status: String,
    url: String,
    uploadedAt: Date
  }],
  startDate: Date,
  completionDate: Date
}, { timestamps: true });

const Onboarding = mongoose.models.Onboarding || mongoose.model('Onboarding', onboardingSchema);
export default Onboarding;